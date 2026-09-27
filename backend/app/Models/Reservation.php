<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = ['name', 'email', 'phone', 'party_size', 'reservation_date', 'reservation_time', 'notes', 'status'];
    protected function casts(): array { return ['reservation_date' => 'date']; }
}
