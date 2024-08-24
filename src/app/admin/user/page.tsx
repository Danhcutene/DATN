import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const invoices = [
    {
        ID: "001",
        TaiKhoan: "Thành Danh",
        Hovaten: "Danh Thành Danh",
        Email: "tdanh3811@gmail.com",
        Ngaydk: "21/08/2024     16:13",
    },
    {
        ID: "002",
        TaiKhoan: "Văn An",
        Hovaten: "Trần Văn An",
        Email: "antv2312@gmail.com",
        Ngaydk: "22/08/2024     16:13",
    },
];

export default function TableDemo() {
    return (
        <div className="p-16">
            {/* Phần chứa các nút */}
            <div className="flex justify-end mb-4">
                <button className=" text-black px-4 py-2 rounded-lg hover:bg-blue-300">
                    Đăng Ký
                </button>
                <button className=" text-black px-4 py-2 rounded-lg hover:bg-blue-300 ml-4">
                    Đăng Nhập
                </button>
            </div>

            {/* Phần Header chứa tiêu đề */}
            <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold">QUẢN LÝ NGƯỜI DÙNG</span>
            </div>
            
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID</TableHead>
                        <TableHead className="w-[200px] py-4">Tài Khoản</TableHead>
                        <TableHead className="w-[200px] py-4">Họ và tên</TableHead>
                        <TableHead className="w-[200px] py-4">Email</TableHead>
                        <TableHead className="w-[200px] py-4">Ngày Đăng ký</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TaiKhoan}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.Hovaten}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.Email}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.Ngaydk}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Chỉnh sửa
                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                                    Xóa
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
