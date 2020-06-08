import "../css/styles.scss"
import warmUp from "./warmup";
import Clock from "./clock";
import { dogDropDown } from "./drop_down"
import TodoList from "./todo_list";

const clock = new Clock();
dogDropDown();

const todoList = new TodoList();