<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use Auth as AuthAuth;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Redirect as RedirectRedirect;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $markedBookIds = $user->marked()->pluck('id')->toArray();
        $books = Book::whereNotIn('id', $markedBookIds)->get();

        return Inertia::render('Profile/Buy', [
            'mustVerifyEmail' => $user instanceof MustVerifyEmail,
            'status' => session('status'),
            'allBooks' => $books,
        ]);
    }

    public function dashboard()
    {
        $user = Auth::user();

        return Inertia::render('Dashboard', [
            'mustVerifyEmail' => $user instanceof MustVerifyEmail,
            'status' => session('status'),
            'markedBooks' => $user->marked,
            'userProducts' => $user->products,
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Profile/Sell', [
            'status' => session('status'),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $user_id = $request->user()->id;
        Book::create([
            'name' => $request->bookname,
            'author' => $request->author,
            'price' => $request->price,
            'description' => $request->description,
            'user_id' => $user_id,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return Inertia::render('Book/Show', [
            'book' => $book,
            'seller' => $book->seller,
        ]);
    }

    public function edit(Book $book)
    {
        $user = Auth::user();

        if ($book->seller->id === $user->id) {
            return Inertia::render('Book/Edit', [
                'book' => $book,
                'mustVerifyEmail' => $user instanceof MustVerifyEmail,
                'status' => session('status'),
            ]);
        }

        return 'This is not your book!';

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        if ($book->seller->id !== Auth::user()->id) {
            return 'This is not your book!';
        }
        $book->update($request->validated());
        $book->save();
    }
    /**
     * Add a book to user's marked books
     */
    public function mark(Book $book)
    {
       $user = Auth::user();
       $user->marked()->attach($book->id);
       return redirect(to: route('profile.buy'));
    }

    public function deleteMark(Book $book)
    {
       $user = Auth::user();
       $user->marked()->detach($book->id);
       return redirect(to: route('dashboard'));
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {

        if ($book->seller->id !== Auth::user()->id) {
            return 'This is not your book!';
        }
        $book->delete();

        return Redirect::route('dashboard');
    }
}
