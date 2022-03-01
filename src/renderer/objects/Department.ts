export default interface IDepartment {
  id: number;
  name: string;
}

export class DepartmentMangager {
  static total = 0;

  static create(_name: string): IDepartment {
    DepartmentMangager.total += 1;

    return {
      id: DepartmentMangager.total,
      name: _name,
    };
  }
}
