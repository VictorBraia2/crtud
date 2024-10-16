import * as mongoose from 'mongoose';
export declare const CatSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    age?: number;
    breed?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    age?: number;
    breed?: string;
}>> & mongoose.FlatRecord<{
    name?: string;
    age?: number;
    breed?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
