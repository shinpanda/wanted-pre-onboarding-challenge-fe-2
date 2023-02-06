class Todos {
  /**
   * 할 일 추가
   * 할 일을 추가할 수 있다.
   * 내용없이 추가할 수 없다.
   * @param {string} content - 내용
   * @param {boolean} isCompleted - 완료여부
   * @param {string} category - 카테고리
   * @param {Array<string>} [tags] - 태그들
   * @returns {number} id - 추가된 할 일 id
   */
  create(content, isCompleted, category, tags) {}

  /**
   * 할 일 조회
   * ID 입력이 없으면, 모든 할 일을 조회할 수 있다.
   * ID 입력을 받으면 ID를 기반으로 특정 할 일을 조회할 수 있다.
   * @param {number} id - 아이디
   * @returns {(object|Array<object>)} todo
   */
  read(id) {}

  /**
   * 할 일 수정
   * ID를 제외한 모든 속성을 수정할 수 있다.
   * 특정 할 일의 특정 태그를 수정할 수 있다.
   * @param {object} toDo - 수정할 toDo 객체
   * @returns void
   */
  update(toDo) {}

  /**
   * 할 일 삭제
   * ID를 기반으로 특정 할 일을 삭제할 수 있다.
   * ID 입력이 없으면 모든 할 일을 제거할 수 있다.
   * @param {number?} id - 아이디
   * @returns void
   */
  delete(id) {}

  /**
   * 특정 할 일의 태그 삭제
   * 모든 할 일의 특정 태그를 삭제할 수 있다.
   * 특정 할 일의 모든 태그를 제거할 수 있다.
   * @param {number} id - 아이디
   * @param {Array<string>?} deleteTags - 삭제할 태그들, 비어있을 경우 모두 삭제
   */
  deleteTag(id, deleteTags) {}
}
