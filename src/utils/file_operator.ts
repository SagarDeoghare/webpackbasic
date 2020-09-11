export class FileOperator {
    public static correctPath(path: string) {
        path = path.replace(/\\/g, '/'); 
    }
};