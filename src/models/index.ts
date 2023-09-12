import { ObjectId } from "mongoose";

export interface IModel {
  _id?: ObjectId;
}

export interface IEmployee extends IModel {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  gender: GenderTypes;
  profileImage: string;
  blocked: boolean;
  birthdate: Date;
  title: string;
  notes: string[];
  permissions: ObjectId[];
  role: ObjectId;
  department: ObjectId;
  salary: ObjectId;
  job: ObjectId;
  address: ObjectId;
  vacationDays: number;
  sickDays: number;
  loggedIn: Date;
  loggedOut: Date;
  emergencyContacts: {
    name: string;
    relationship: RelationshipTypes;
    phone: string;
  }[];
  documents: {
    name: string;
    file: string;
  }[];
}

export interface ISalary extends IModel {
  amount: number;
  comments: string[];
}

export interface IRole extends IModel {
  name: string;
  description: string;
  inheritance: ObjectId[];
  permissions: ObjectId[];
}

export interface IPermission extends IModel {
  name: string;
  description: string;
}

export interface IDepartment extends IModel {
  name: string;
  address: ObjectId;
  devices: ObjectId[];
  jobs: ObjectId[];
}

export interface IAddress extends IModel {
  street: string;
  postal_code: number;
  city: string;
  state_province: string;
  country: ObjectId;
}

export interface ICountry extends IModel {
  name: string;
  code: string;
}

export interface IJob extends IModel {
  name: string;
  min_salary: number;
}

export interface IDevice extends IModel {
  name: string;
  description: string;
  state: DeviceStates;
  history: ObjectId[];
  os: OsTypes;
  os_version: string;
  cpu: string;
  lastIPv4: string;
  lastIPv6: string;
  last_user: ObjectId;
  softwares: ObjectId[];
}

export interface ISoftware extends IModel {
  name: string;
  description: string;
  url: string;
  version: string;
  license: ObjectId;
}

export interface ILicense extends IModel {
  name: string;
  key: string;
  amount: number;
  expiresAt: Date;
}

export interface IApp extends IModel {
  name: string;
  token: string;
  lastIPv4: string;
  blocked: boolean;
  permissions: ObjectId[];
}

export interface IProject extends IModel {
  name: string;
  description: string;
  priority: PriorityTypes;
  state: ProjectStates;
  employees: ObjectId[];
  todos: ObjectId[];
  start_date: Date;
  end_date: Date;
}

export interface ITodo extends IModel {
  assigned_to: ObjectId;
  text: string;
  priority: PriorityTypes;
  state: TodoStates;
  tags: string[];
  start_date: Date;
  end_date: Date;
}

export interface IProduct extends IModel {
  name: string;
  description: string;
  barcode: string;
  unitOfMeasurement: string;
  price: number;
  reorderThreshold: number;
}

export interface ISupplier extends IModel {
  name: string;
  contactInfo: string;
  leadTime: string;
  address: ObjectId;
}

export interface IWarehouse extends IModel {
  name: string;
  contactInfo: string;
  address: ObjectId;
}

export interface IDelivery extends IModel {
  deliveredAt: Date;
  supplier: ObjectId;
  product: ObjectId;
  warehouse: ObjectId;
  order: ObjectId;
}

export interface IStorage extends IModel {
  quantity: number;
  warehouse: ObjectId;
  product: ObjectId;
}

export interface IOrder extends IModel {
  quantity: number;
  orderedAt: Date;
  warehouse: ObjectId;
  product: ObjectId;
}

export interface ITicket extends IModel {
  title: string;
  description: string;
  state: TicketStates;
  priority: PriorityTypes;
  due_date: Date;
  assigned_to: ObjectId;
  created_by: ObjectId;
}

export interface ITicketComment extends IModel {
  content: string;
  ticket: ObjectId;
  employee: ObjectId;
}

export interface ITicketCategory extends IModel {
  name: string;
}

export interface IBenefit extends IModel {
  name: string;
  description: string;
  coverage: number;
}

enum GenderTypes {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

enum DeviceStates {
  STOPPED = "STOPPED",
  RUNNING = "RUNNING",
}

enum OsTypes {
  WINDOWS = "WINDOWS",
  MACOS = "MACOS",
  LINUX = "LINUX",
  OTHER = "OTHER",
}

enum ProjectStates {
  NOT_ACCEPTED = "NOT_ACCEPTED",
  ACCEPTED = "ACCEPTED",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

enum PriorityTypes {
  HIGHEST = "HIGHEST",
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW",
  LOWEST = "LOWEST",
}

enum TodoStates {
  PLANNING = "PLANNING",
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

enum TicketStates {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  RESOLVED = "RESOLVED",
  CLOSED = "CLOSED",
}

enum RelationshipTypes {
  SPOUSE = "SPOUSE",
  PARENT = "PARENT",
  CHILD = "CHILD",
  SIBLING = "SIBLING",
  OTHER = "OTHER",
}
