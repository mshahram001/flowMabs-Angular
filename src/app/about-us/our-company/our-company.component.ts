import { Component } from '@angular/core';

@Component({
  selector: 'app-our-company',
  standalone: false,
  
  templateUrl: './our-company.component.html',
  styleUrl: './our-company.component.css'
})
export class OurCompanyComponent {
  cards = [
    {
      title: 'Unlocking the Power of Polycytotoxic T Cells in the Fight Against Tuberculosis',
      description: 'Discover how polycytotoxic T cells and LEGENDplex assays are revolutionizing tuberculosis research and treatment through enhanced immunophenotyping.iscover our secondary antibodies and reagents, designed to complement your primary of choice with ease.',
      linkText: 'Read the full blog',
    }
  ];
}
