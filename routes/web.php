<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get(
    '', function () {
        $user = Auth::user();
        if (! $user) {
            return Inertia::render(
                'Home', [
                    'canLogin' => Route::has('login'),
                    'canRegister' => Route::has('register'),
                    'laravelVersion' => Application::VERSION,
                    'phpVersion' => PHP_VERSION,
                ]
            );
        }

        return redirect('/dashboard');
    }
)->name('root');

Route::get(
    '/about', function () {
        return Inertia::render(
            'About', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]
        );
    }
)->name('about');

Route::get(
    '/home', function () {
        return Inertia::render(
            'Home', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]
        );
    }
)->name('home');

Route::get(
    '/dashboard', [BookController::class, 'dashboard']
)->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(
    function () {
        Route::get('/buy', [BookController::class, 'index'])
            ->name('profile.buy');
        Route::get('/sell', [BookController::class, 'create'])
            ->name('profile.sell');
        Route::get('/profile', [ProfileController::class, 'edit'])
            ->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])
            ->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])
            ->name('profile.destroy');
    }
);

Route::middleware('auth')->group(
    function () {
        Route::group(
            [
                'prefix' => '/api/book',
                'as' => 'api.book',
            ], function () {
                Route::post('/', [BookController::class, 'store'])
                    ->name('.store');
                Route::post('/mark/{book}', [BookController::class, 'mark'])
                    ->name('.mark');
                Route::delete('/mark/{book}', [BookController::class, 'deleteMark'])
                    ->name('.mark.destroy');
                Route::patch('/{book}', [BookController::class, 'update'])
                    ->name('.update')
                    ->whereNumber('book');
                Route::delete('/{book}', [BookController::class, 'destroy'])
                    ->name('.destroy')
                    ->whereNumber('book');
            }
        );
        Route::get('/book/{book?}', [BookController::class, 'show'])
            ->name('book.show')
            ->whereNumber('book');
        Route::get('/book/edit/{book}', [BookController::class, 'edit'])
            ->name('book.edit')
            ->whereNumber('book');
    }
);

require __DIR__.'/auth.php';
