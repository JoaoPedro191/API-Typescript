import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";

// DTO => DATA TRANSFER OBJECT = objeto para transferência de dados
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepositories {
  private repository: Repository<Category>;
  // private static INSTANCE: CategoriesRepositories;
  // padrao de projeto singleton

  constructor() {
    this.repository = getRepository(Category);
  }
  // public static getInstace(): CategoriesRepositories {
  //   if (!CategoriesRepositories.INSTANCE) {
  //     CategoriesRepositories.INSTANCE = new CategoriesRepositories();
  //   }
  //   return CategoriesRepositories.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const all = await this.repository.findOne({ name });
    return all;
  }
}
export { CategoriesRepositories };
// const não serve para armazenar dados dentro de uma classe
// precisamos declarar o tipo de acesso do nosso atributo na classe.

/* SOLID = 5 Principios
S => SRP - single Responsability Principle (Princípio da Responsabilidade Unica)
O => Open-Closed Principle (Princípio aberto/fechado) 
L => LSP - Liskov Substituion Principle (Princípio de Substituição de Liskov) 
I => ISP - Interface Segregation Principle (Princípio da Segregação de interface)
D => DIP - Dependency Inversion Principle (Princípio de Inversão de Dependência)
*/
