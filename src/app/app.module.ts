import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"
import { CalculatorComponent } from "./calculator/calculator.component";
import { AppComponent } from "./app.component";
@NgModule({
    declarations: [
        AppComponent,
        CalculatorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }