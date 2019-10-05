import { CreatePDF, Sendemail } from '../../Util';
import { IFile, ISendStatus } from '../../Util/Types';

const resolvers = {
    Query: {
        uploads: (_: any, args: File) => { },
    },
    Mutation: {
        uploadFile: async (_: any, { file }: IFile) => {
            //Conver the image to buffer then write it into PDF file
            let pdfFile: any = await CreatePDF(file);
            // send pdf file as attachment to the mail address
            let sendStatus: ISendStatus = await Sendemail(process.env.FROM!, process.env.TO!, process.env.SUBJECT!, pdfFile);
            return sendStatus;
        }
    },
};

export default resolvers;