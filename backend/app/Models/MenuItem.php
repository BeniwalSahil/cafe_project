<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model
{
    protected $fillable = ['name', 'description', 'category', 'price', 'is_featured', 'sort_order'];
    protected function casts(): array { return ['price' => 'decimal:2', 'is_featured' => 'boolean']; }
}
