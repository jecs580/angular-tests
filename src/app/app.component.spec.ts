import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing'
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        RouterTestingModule.withRoutes([])
      ],

      // Ignora cualquier directiva| componente que no sea el mismo componente 'App'
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tests'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tests');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('tests app is running!');
  });

  it('Debe de tener un router-outlet',()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(debugElement).not.toBeNull();
  })

  
});
