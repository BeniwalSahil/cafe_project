<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    public function run(): void
    {
        foreach ([['Sunny side eggs', 'Herbed labneh, chilli oil, sourdough', 'Breakfast', 280, 1], ['Roasted mushroom toast', 'Whipped ricotta, thyme, hazelnut dukkah', 'Kitchen', 360, 2], ['Cardamom bun', 'Warm from the oven, every morning', 'Bakery', 140, 3], ['House flat white', 'Our SKB house blend, steamed just so', 'Coffee', 180, 4]] as [$name, $description, $category, $price, $sort]) MenuItem::updateOrCreate(['name' => $name], compact('description', 'category', 'price') + ['sort_order' => $sort, 'is_featured' => true]);
    }
}
