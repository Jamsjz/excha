<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'author',
        'price',
        'user_id',
    ];

    public function seller()
    {
        return $this->belongsTo(User::class);
    }

    public function marked_by()
    {
        return $this->belongsToMany(User::class, 'user_books');
    }

    public function latestmarkedby()
    {
        return $this->hasOne(User::class)->latestOfMany();
    }
}
