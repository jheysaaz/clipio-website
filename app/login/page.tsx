"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Chrome } from "lucide-react";

export const dynamic = "force-dynamic";

function LoginForm() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToExtension, setRedirectToExtension] = useState(false);

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1";
  const CHROME_EXTENSION_ID = process.env.NEXT_PUBLIC_CHROME_EXTENSION_ID;

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccess("Account created successfully! Please login.");
    }
    // Check if redirect param is set for extension
    if (searchParams.get("redirect") === "extension") {
      setRedirectToExtension(true);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Important for cookies
        body: JSON.stringify({
          login,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Store the access token
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to extension popup or home
      if (redirectToExtension && CHROME_EXTENSION_ID) {
        // Send message to extension
        if (typeof chrome !== "undefined" && chrome.runtime) {
          chrome.runtime.sendMessage(
            CHROME_EXTENSION_ID,
            {
              type: "AUTH_SUCCESS",
              payload: { token: data.accessToken, user: data.user },
            },
            () => {
              // Close the tab after sending message
              window.close();
            }
          );
        } else {
          // Fallback if chrome API is not available
          alert(
            "Login successful! You can close this tab and return to the extension."
          );
        }
      } else {
        window.location.href = "/";
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <ThemeToggle />
      <Card className="w-full max-w-md border-0 shadow-none sm:border sm:shadow-sm">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email or username and password to login
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {success && (
              <div className="text-sm text-green-600 bg-green-50 dark:bg-green-950/20 p-3 rounded-md">
                {success}
              </div>
            )}
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                {error}
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="login">Email or Username</Label>
              <Input
                id="login"
                type="text"
                placeholder="m@example.com or username"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/forgot-password"
                className="text-sm text-muted-foreground underline-offset-4 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </Button>
            <div className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Register
              </Link>
            </div>
            {CHROME_EXTENSION_ID && (
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => {
                  window.open(
                    `https://chrome.google.com/webstore/detail/${CHROME_EXTENSION_ID}`,
                    "_blank"
                  );
                }}
              >
                <Chrome className="mr-2 h-4 w-4" />
                Get Chrome Extension
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          Loading...
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
