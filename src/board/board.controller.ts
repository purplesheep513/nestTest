import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './boar-status.enum';
import { BoardService } from './board.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board } from './board.entity';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {
  }
  // @Get()
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardService.createBoard(createBoardDto);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string) {
  //   return this.boardService.getBoardById(id);
  // }
  // @Post()
  // @UsePipes(ValidationPipe) //유효성체크
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardService.deleteBoard(id);
  // }
  // @Patch('/:id')
  // updateBoardStatus(@Param('id') id: string, @Body('status') status: BoardStatus) {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
