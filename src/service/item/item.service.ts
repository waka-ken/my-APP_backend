import {
    Injectable,
    BadRequestException,
    ImATeapotException,
} from '@nestjs/common';
import { Item } from 'src/entities/item.entity';
import {
    Repository,
    InsertResult,
    UpdateResult,
    DeleteResult,
    UpdateManyOptions,
} from 'typeorm'; // 追記！
import { InjectRepository } from '@nestjs/typeorm'; // 追記！
import { CreateItemDTO } from '../../DTO/item.dto';

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>,
    ) {}

    // テーブルの全データを取得する関数を定義
    async findAll(): Promise<Item[]> {
        return await this.itemRepository.find();
    }

    // テーブルにアイテムを追加する関数を定義
    async additem(todo: CreateItemDTO): Promise<InsertResult> {
        return await this.itemRepository.insert(todo);
    }

    async changeDone(id: number, todo: CreateItemDTO): Promise<any> {
        const item: Item | undefined = await this.itemRepository.findOne({
            where: {
                id: id,
            },
        });
        if (!item) {
            throw new BadRequestException('');
        }

        console.log(item);
        item.todo = todo.todo;
        item.done = todo.done;

        return this.itemRepository.save(item);
    }

    async deleteItem(id: number): Promise<DeleteResult> | null {
        return await this.itemRepository.delete(id);
    }

    // idを指定してテーブルから1件のデータを取得する関数を定義
    async find(id: number): Promise<Item> | null {
        return await this.itemRepository.findOne({ id: id });
    }

    // // idを指定してテーブルのデータを更新する関数を定義
    // async update(id: number, item): Promise<UpdateResult> {
    //     return await this.itemRepository.update(id, item);
    // }

    // //  idを指定してテーブルのデータを削除する関数を定義
    // async delete(id: number): Promise<DeleteResult> {
    //     return await this.itemRepository.delete(id);
    // }

    // 追記！（パスワードを使用した削除）
    // async deleteByPassword(
    //     id: number,
    //     deletePassword: string,
    // ): Promise<DeleteResult> {
    //     const targetItem = await this.find(id);
    //     if (!targetItem) {
    //         return Promise.reject(new Error('Missing Item.'));
    //     }
    //     // if (targetItem.deletePassword !== deletePassword) {
    //     //     return Promise.reject(new Error('Incorrect password'));
    //     // }
    //     return await this.itemRepository.delete(id);
    // }
}
