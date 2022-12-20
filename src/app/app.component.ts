import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngPractice';

  constructor(
    private vcr: ViewContainerRef,
    private cfr:ComponentFactoryResolver
  ) { }

  async loadAdmin(){
    this.vcr.clear();
    const {AdminlistComponent}=await import ('./components/adminlist/adminlist.component')
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistComponent)
    )
  }

  async loadUser(){
    this.vcr.clear();
    const {UserlistComponent}=await import ('./components/userlist/userlist.component')
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserlistComponent)
    )
  }
}
