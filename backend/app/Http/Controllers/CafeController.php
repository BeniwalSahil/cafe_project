<?php

namespace App\Http\Controllers;

use App\Models\MenuItem;
use App\Models\Reservation;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CafeController extends Controller
{
    public function menu(): JsonResponse
    {
        return response()->json(MenuItem::query()->where('is_featured', true)->orderBy('sort_order')->get());
    }

    public function reserve(Request $request): JsonResponse
    {
        $data = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:150'],
            'phone' => ['nullable', 'string', 'max:30'],
            'party_size' => ['required', 'integer', 'min:1', 'max:12'],
            'reservation_date' => ['required', 'date', 'after_or_equal:today'],
            'reservation_time' => ['required', 'date_format:H:i'],
            'notes' => ['nullable', 'string', 'max:500'],
        ]);
        $data['status'] = 'pending';
        $reservation = Reservation::create($data);
        return response()->json(['message' => 'Your table request is in!', 'reservation' => $reservation], 201);
    }
}
