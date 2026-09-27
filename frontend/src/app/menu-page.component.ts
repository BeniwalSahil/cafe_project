import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({ selector: 'app-menu-page', imports: [CommonModule], templateUrl: './menu-page.component.html', styleUrl: './menu-page.component.scss' })
export class MenuPageComponent {
  sections = [
    { title: 'Breakfast', note: 'served until 12:00', items: [['Sunny side eggs', 'Herbed labneh, chilli oil, sourdough', '₹280'], ['Masala avocado toast', 'Crushed avocado, tomato, lime, toasted seeds', '₹320'], ['SKB breakfast plate', 'Eggs your way, toast, greens, house hash', '₹420']] },
    { title: 'All-day kitchen', note: 'from 12:00 onwards', items: [['Roasted mushroom toast', 'Whipped ricotta, thyme, hazelnut dukkah', '₹360'], ['Grilled peri peri paneer', 'Sourdough, pickled onion, herb salad', '₹390'], ['Garden grain bowl', 'Seasonal vegetables, greens, lemon tahini', '₹380']] },
    { title: 'Coffee & coolers', note: 'our daily ritual', items: [['House flat white', 'SKB house blend, steamed just so', '₹180'], ['Cold brew tonic', 'Slow-steeped coffee, citrus tonic, orange', '₹240'], ['Iced saffron latte', 'Espresso, milk, saffron, a little sweetness', '₹260']] },
    { title: 'From the bakery', note: 'baked fresh every morning', items: [['Cardamom bun', 'Warm, buttery and gently spiced', '₹140'], ['Chocolate sea-salt cookie', 'Dark chocolate chunks, flaky sea salt', '₹120'], ['Burnt basque cheesecake', 'Creamy centre, seasonal fruit', '₹280']] }
  ];
}
