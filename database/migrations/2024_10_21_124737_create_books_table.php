<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('author');
            $table->float('price', 10, 2);
            $table->foreignIdFor(App\Models\User::class)->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->timestamps();
        });

        //marked
        Schema::create('user_book', function (Blueprint $table) {
            $table->foreignIdFor(App\Models\User::class)->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignIdFor(App\Models\Book::class)->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->primary(['user_id', 'book_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
        Schema::dropIfExists('user_book');
    }
};
