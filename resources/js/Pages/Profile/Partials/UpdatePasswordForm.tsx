import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';

export default function UpdatePasswordForm({
    className = '',
}: {
    className?: string;
}) {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Update Password
                    </CardTitle>
                    <CardDescription>
                        Ensure your account is using a long, random password to stay
                        secure.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={updatePassword} className="">
                    <CardContent>


                        <div>
                            <Label
                                htmlFor="current_password"
                            >
                                Current Password
                            </Label>

                            <Input
                                id="current_password"
                                ref={currentPasswordInput}
                                value={data.current_password}
                                onChange={(e) =>
                                    setData('current_password', e.target.value)
                                }
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                            />

                            <InputError
                                message={errors.current_password}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <Label
                                htmlFor="new_password"
                            >
                                New Password
                            </Label>

                            <Input
                                id="password"
                                ref={passwordInput}
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div>
                            <Label
                                htmlFor="password_confirmation"
                            >
                                Confirm Password
                            </Label>

                            <Input
                                id="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData('password_confirmation', e.target.value)
                                }
                                type="password"
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>

                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">
                                    Saved.
                                </p>
                            </Transition>
                        </div>
                    </CardFooter>
                </form>
            </Card>

        </section>
    );
}
