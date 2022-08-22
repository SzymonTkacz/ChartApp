import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user-model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() oldestUsers: User[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
