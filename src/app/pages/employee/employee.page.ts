import { Component, OnInit } from "@angular/core";
import { EmployeeService, Employee } from "../../services/employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.page.html",
  styleUrls: ["./employee.page.scss"]
})
export class EmployeePage implements OnInit {
  private employees: Employee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }
  remove(item) {
    this.employeeService.removeEmployee(item.id);
  }
}
