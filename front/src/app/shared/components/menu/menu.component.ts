import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  show = false;

  constructor(private menuService : MenuService) {
   }

  ngOnInit(): void {
    this.subToBurgerClick();
  }

  subToBurgerClick(){
    this.menuService.showMenu$.subscribe((item : boolean) => {
      this.show = item;
    })
  }

  menuHidden(){
    this.menuService.showMenu$.next(false);
  }

}
