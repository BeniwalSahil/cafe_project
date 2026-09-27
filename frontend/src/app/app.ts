import { Component, HostListener, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

type ModalType = 'contact' | 'review' | 'reserve' | null;

@Component({ selector: 'app-root', imports: [FormsModule, RouterLink, RouterLinkActive, RouterOutlet], templateUrl: './app.html', styleUrl: './app.scss' })
export class App {
  mobileOpen = signal(false);
  modal = signal<ModalType>(null);
  submitted = signal(false);
  submitting = signal(false);

  contactForm = { name: '', email: '', message: '' };
  reviewForm = { name: '', rating: 5, comment: '' };
  reservationForm = { name: '', email: '', phone: '', party_size: 2, reservation_date: '', reservation_time: '', notes: '' };
  reservationError = '';
  minReservationDate = new Date().toISOString().slice(0, 10);

  constructor(private readonly http: HttpClient) {}

  closeMobileMenu(): void { this.mobileOpen.set(false); }

  openModal(type: Exclude<ModalType, null>, event?: Event): void {
    event?.preventDefault();
    this.submitted.set(false);
    this.modal.set(type);
    this.closeMobileMenu();
    this.reservationError = '';
  }

  closeModal(): void {
    this.modal.set(null);
    this.submitted.set(false);
  }

  submitForm(): void {
    this.submitted.set(true);
  }

  submitReservation(form: { valid: boolean | null }): void {
    if (form.valid !== true || this.submitting()) return;

    this.submitting.set(true);
    this.reservationError = '';
    this.http.post('/api/reservations', this.reservationForm).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
      },
      error: (error: { error?: { message?: string } }) => {
        this.submitting.set(false);
        this.reservationError = error.error?.message ?? 'We could not save your request. Please call us on +91 9799730400.';
      },
    });
  }

  @HostListener('document:keydown.escape')
  handleEscape(): void {
    if (this.modal()) this.closeModal();
  }
}
