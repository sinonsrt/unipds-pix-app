import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-pix-transfer',
  imports: [],
  templateUrl: './pix-transfer.component.html',
})
export class PixTransferComponent {
  readonly pixKey = signal('');
  readonly amount = signal('');
  readonly scheduledDate = signal('');
  readonly isConfirmed = signal(false);

  readonly isFormValid = computed(
    () =>
      this.pixKey().trim().length > 0 &&
      Number(this.amount()) > 0 &&
      this.scheduledDate().trim().length > 0
  );

  updatePixKey(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.pixKey.set(input.value);
  }

  updateAmount(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.amount.set(input.value);
  }

  updateScheduledDate(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.scheduledDate.set(input.value);
  }

  confirm(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (this.isFormValid()) {
      this.isConfirmed.set(true);
    }
  }
}
