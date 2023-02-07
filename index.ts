interface iTodo {
  id: number;
  content: string;
  isCompleted: boolean;
  category: string;
  tags?: string[];
}

class TTodos {
  private ids: iTodo[];
  create(
    content: string,
    isCompleted: boolean,
    category: string,
    tags?: string[]
  ): number {
    return 0;
  }

  read(id: number): iTodo | iTodo[] {
    return [];
  }

  delete(id: number) {}

  deleteTag(id: number, deleteTag: string[]) {}
}
