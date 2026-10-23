import { TestBed } from '@angular/core/testing';
import { PixTransferComponent } from './pix-transfer.component';

describe('PixTransferComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PixTransferComponent],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PixTransferComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialize signals with empty values', () => {
    const fixture = TestBed.createComponent(PixTransferComponent);
    const component = fixture.componentInstance;
    expect(component.pixKey()).toBe('');
    expect(component.amount()).toBe('');
    expect(component.scheduledDate()).toBe('');
    expect(component.isConfirmed()).toBe(false);
  });

  it('should update signals on form input and confirm state on submit', () => {
    const fixture = TestBed.createComponent(PixTransferComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const pixKeyInput = compiled.querySelector<HTMLInputElement>('#pixKey')!;
    const amountInput = compiled.querySelector<HTMLInputElement>('#amount')!;
    const scheduledDateInput = compiled.querySelector<HTMLInputElement>('#scheduledDate')!;
    const form = compiled.querySelector<HTMLFormElement>('form')!;

    pixKeyInput.value = 'user@example.com';
    pixKeyInput.dispatchEvent(new Event('input'));

    amountInput.value = '150.50';
    amountInput.dispatchEvent(new Event('input'));

    scheduledDateInput.value = '2026-11-01';
    scheduledDateInput.dispatchEvent(new Event('input'));

    expect(component.pixKey()).toBe('user@example.com');
    expect(component.amount()).toBe('150.50');
    expect(component.scheduledDate()).toBe('2026-11-01');

    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(component.isConfirmed()).toBe(true);
    expect(compiled.textContent).toContain('Transfer Confirmed');
    expect(compiled.textContent).toContain('user@example.com');
    expect(compiled.textContent).toContain('150.50');
    expect(compiled.textContent).toContain('2026-11-01');
  });
});
