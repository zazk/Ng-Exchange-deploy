import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Title } from '../home/title';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [CurrencyPipe, Title]
})
export class LandingComponent implements OnInit {

  public days;
  public value: any;
  public from: any = 1;
  public to: any;
  private formattedAmount: string = '0';
  private data;
  private currencyIndex: number;

  constructor( private currencyPipe: CurrencyPipe, public converter: Title) {}

  public ngOnInit() {
    console.log('hello `Landing` component');
    this.from = this.setCurrency(this.from);
    this.days =  Array.from({length: 20}, (v, k) => k + 1 );

    this.converter.getData().subscribe((data) => {
      this.data = data;
      console.log('Data from Currency on Landing', this.data);
      this.currencyIndex = data['rates']['EUR'];
      this.to = this.setCurrency(this.currencyIndex, 'EUR');
    });
  }
  public transformCurrency(element) {
    try {
      if (typeof (element.target.value) !== 'number') {
        this.formattedAmount = this.setCurrency(this.from);
      }
      // Remove or comment this line if you dont want
      // to show the formatted amount in the textbox.
      element.target.value = this.formattedAmount;
      this.to = this.setCurrency( ( this.from * this.currencyIndex), 'EUR');
    } catch (e) {
      console.log(e);
    }
  }

  public removeCurrency(element) {
    try {
      if (element.target.value.indexOf('USD') !== -1) {
        this.formattedAmount = this.formattedAmount.replace(/[USD,]/g, '');
        element.target.value = this.formattedAmount;
      } else {
        this.formattedAmount = '0';
      }
    } catch (e) {
      console.log(e);
    }
  }
  private setCurrency(value, currency: string = 'USD') {
    return this.currencyPipe.transform(value, currency, 'code', '1.2-4');
  }
}
