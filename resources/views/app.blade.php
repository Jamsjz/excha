<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Excha') }}</title>

    {{-- <script src="https://unpkg.com/htmx.org@2.0.3"></script> --}}
    {{-- <script src="https://unpkg.com/htmx.org@1.9.12/dist/ext/multi-swap.js"></script> --}}
    <style>
        @font-face {
            font-family: 'CanvaSansRegular';
            src: url('/fonts/CanvaSans-Regular.woff2') format('woff2');
        }

        @font-face {
            font-family: 'CanvaSansBold';
            src: url('/fonts/CanvaSans-Bold.woff2') format('woff2');
            font-weight: bold;
        }

        @font-face {
            font-family: 'CooperHewittLight';
            src: url('/fonts/CooperHewittLight.woff2') format('woff2');
        }

        @font-face {
            font-family: 'FredokaOne';
            src: url('/fonts/FredokaOne.woff2') format('woff2');
        }
    </style>

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased" hx-boost="true" hx-ext="multi-swap">
    @inertia
</body>

</html>
