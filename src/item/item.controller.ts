import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from '../entities/item.entity'; // 追記！
import { CreateItemDTO, DeleteItemDTO } from './item.dto'; // 追記！
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm'; // 追記！
import { promises } from 'dns';

@Controller('item')
export class ItemController {
    // サービスの呼び出し
    constructor(private itemService: ItemService) {}

    // `item`のURIへのGETメソッドでデータ全件取得．サービスの`findAll()`関数を実行．
    @Get()
    async getItemList(): Promise<Item[]> {
        return await this.itemService.findAll();
    }

    // `item`のURIへのPOSTメソッドでデータ新規登録．
    @Post()
    async addItem(@Body() createItemDTO: CreateItemDTO): Promise<any> {
        console.log(createItemDTO);
        return this.itemService.additem(createItemDTO);
    }

    // `item/id番号`のURIへのGETメソッドでid指定で1件データ取得．
    @Get(':id')
    async getItem(@Param('id') id: string): Promise<Item> {
        return await this.itemService.find(Number(id));
    }

    @Put(':id')
    async changeDone(
        @Param('id') id: number,
        @Body() createItemDTO: CreateItemDTO,
    ): Promise<any> {
        // console.log('poe');
        return this.itemService.changeDone(id, createItemDTO);
    }

    // @Put(':id/update')
    // async update(
    //     @Param('id') id: string,
    //     @Body() itemData: UpdateItemDTO,
    // ): Promise<UpdateResult> {
    //     const newData = !itemData.done
    //         ? itemData
    //         : {
    //             ...itemData,
    //             ...{ done: itemData.done.toLowerCase() === 'true' },
    //         };
    //     return await this.itemService.update(Number(id), newData);
    // }
    // パスワードなしで即削除する処理（動作確認用）
    // @Delete(':id/delete')
    // async delete(@Param('id') id: string): Promise<DeleteResult> {
    //     return await this.itemService.delete(Number(id));
    // }

    // // POSTメソッドでパスワードを送信して削除する処理
    // @Post(':id/delete')
    // async deleteItem(
    //     @Param('id') id: string,
    //     @Body() deleteItem: DeleteItemDTO,
    // ) {
    //     const item = this.service.find(Number(id));
    //     // idで検索したけど該当するアイテムが見つからなかったとき
    //     if (!item) {
    //         throw new HttpException(
    //             {
    //                 status: HttpStatus.NOT_FOUND,
    //                 error: `Missing item(id: ${id}).`,
    //             },
    //             404,
    //         );
    //     }
    //     try {
    //         await this.service.deleteByPassword(
    //             Number(id),
    //             deleteItem.deletePassword,
    //         );
    //     } catch (e) {
    //         // 送信したパスワードが間違っていたとき
    //         if (e.message === 'Incorrect password') {
    //             throw new HttpException(
    //                 {
    //                     status: HttpStatus.FORBIDDEN,
    //                     error: 'Incorrect password',
    //                 },
    //                 403,
    //             );
    //         }
    //         // パスワード合ってるけどなんかイマイチだったとき
    //         throw new HttpException(
    //             {
    //                 status: HttpStatus.INTERNAL_SERVER_ERROR,
    //                 error: 'Internal server error.',
    //             },
    //             500,
    //         );
    //     }
    //     return;
    // }
}
