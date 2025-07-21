
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function AdminPage() {
    const { toast } = useToast();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // In a real app, this would call a server action to update the password.
        // For this prototype, we'll just show a success toast.
        toast({
            title: "Password Updated",
            description: "The password for user 'user' has been successfully changed.",
        });
        (event.target as HTMLFormElement).reset();
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline tracking-tight">Admin Dashboard</h1>
            <Card className="max-w-md">
                <CardHeader>
                    <CardTitle>Change User Password</CardTitle>
                    <CardDescription>
                        Update the password for the general 'user' account.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" value="user" disabled />
                        </div>
                         <div className="space-y-1">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" required />
                        </div>
                         <div className="space-y-1">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" required />
                        </div>
                        <Button type="submit">Update Password</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
