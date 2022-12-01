import { Component, OnInit, EventEmitter } from '@angular/core';
import { Isecurityquestions } from '../register-model';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({

  selector: 'app-securityquestions',
  templateUrl: './securityquestions.component.html',
  styleUrls: ['./securityquestions.component.css']

})

export class SecurityquestionsComponent implements OnInit {

  FormControl = new FormControl('', [Validators.required]);

  Securityquestions = {} as Isecurityquestions;
  questionsSecurity: any = [];
  userData = {} as any;

  subscription!: Subscription;

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.questionsSecurity = [
      "What is your favourite food/dish?",
      "Who is your childhood hero ?",
      "What is the name of your favourite pet?",
      "In what city you were born?",
      "What is the name of your first school?"]
    // console.log("my console event");
    this.userData = JSON.parse(localStorage.getItem("forgotpassword") || '{}')
    console.log(this.userData)

  }

  SEC(f: NgForm) {
    console.log(this.Securityquestions)
    let sendData = {
      "ans1": this.Securityquestions.Answer1,
      "ans2": this.Securityquestions.Answer2,
      "ans3": this.Securityquestions.Answer3,

    }
    this.subscription = this.http.empPostData('securityanscheck/', sendData, this.userData.mailid).subscribe({
      next: (data: any) => {
        console.log(data)
        if (data) {
          if (data.status == "success" && data.statuscode == 200) {
            let correctAnswers = data.answers;
            let questions = [];
            for (let i = 0; i < this.questionsSecurity.length; i++) {
              if (this.questionsSecurity[i] == this.Securityquestions.Question1 || this.questionsSecurity[i] == this.Securityquestions.Question2 || this.questionsSecurity[i] == this.Securityquestions.Question3) {
                questions.push(i)


              }
            }
            console.log(questions)

            let answers = [this.Securityquestions.Answer1, this.Securityquestions.Answer2, this.Securityquestions.Answer3]
            let count = 0;
            for (let i = 0; i < correctAnswers.length; i++) {
              if (answers[i] == correctAnswers[questions[i]]) {
                count = count + 1;
              }
            }
            if (count >= 3) {
              this.router.navigate(["/resetpassword"])
            }
            else{
              alert("answers are not valid")
            }

          }
         
        }

      },
      error: reason => console.log(reason)

    })
    // console.log("my console event");
  }

  onChangeQueryDetails(event: any,) {
    console.log("my console event", event,);
  }
 
}