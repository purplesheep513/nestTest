import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boar-status.enum';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) { }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException('게시물을 찾을 수 없습니다.');
    }

    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC
    })
    await this.boardRepository.save(board);
    return board;
  }
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {// 없는 게시물일 때
  //     throw new NotFoundException('게시물을 찾을 수 없습니다.');
  //   }

  //   return found;
  // }

  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;

  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC
  //   }

  //   this.boards.push(board);
  //   return board;
  // }

  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);

  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }

}
