import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface employee {
  ename: string;
  age: number;
  //   addedby: string;
  joindate: number;
}

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  private employees: Observable<Employee[]>;
  private employeesCollection: AngularFirestoreCollection<Employee>;

  constructor(db: AngularFirestore) {
    this.mployeesCollection = db.collection<Employee>("employees");
    this.employees = this.employeesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.employees;
  }
  getEmployee(id) {
    return this.employeesCollection.doc<Employee>(id).valueChanges();
  }
  updateEmployee(employee: Employee, id: string) {
    return this.employeesCollection.doc(id).update(employee);
  }
  addEmployee(employee: Employee) {
    return this.employeesCollection.add(employee);
  }
  removeEmployee(id) {
    return this.employeesCollection.doc(id).delete();
  }
}
