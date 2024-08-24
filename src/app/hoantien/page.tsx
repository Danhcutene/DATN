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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"



const invoices = [
  {
      ID: "Hình ảnh",
      TaiKhoan: "165.000đ",
      Hovaten: "Hoàn tiền thành công",
      Email: "15022005",
      Ngaydk: "21/08/2024     16:13",
  },
  {
    ID: "Hình ảnh",
    TaiKhoan: "165.000đ",
    Hovaten: "Hoàn tiền thành công",
    Email: "15022005",
    Ngaydk: "21/08/2024     16:13",
  },
];

export default function TableDemo() {
  return (
    <div className="p-24">
      <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold ">Trả hàng/hoàn tiền</span>
          </div>
      <Tabs defaultValue="account" className="w-[1400px]">
    <TabsList>
      <TabsTrigger value="All">Tất cả</TabsTrigger>
      <TabsTrigger value="CanPhanHoi">Cần phản hồi</TabsTrigger>
      <TabsTrigger value="DaPhanHoi">Đã phản hồi</TabsTrigger>
      <TabsTrigger value="Success">Hoàn thành</TabsTrigger>
    </TabsList>
    <TabsContent value="All">
    <div className="mt-3">
          <div className=" w-full max-w-sm items-center space-x-2">
        <span>Mã đơn hàng</span>
        <Input type="text"/>  
     <div className="flex mt-4">
     <div>
     <span className="p-2">Ngày bắt đầu</span>
     <Input className="" type="date" id="Date" placeholder="Ngày bắt đầu" />
     </div>
     <div className="ml-3">
     <span className="p-2">Ngày kết thúc</span>
     <Input className="" type="date" id="Date" placeholder="Ngày kết thúc" />
     </div>
     </div>
    
      
    </div>
    <br />
  

          {/* Bảng quản lý người dùng */}
          <Table className="w-full border-collapse bg-white shadow-lg">
              <TableHeader className=" text-white">
                  <TableRow>
                      <TableHead className="w-[100px] py-4">Sản phẩm</TableHead>
                      <TableHead className="w-[200px] py-4">Số tiền hoàn lại/Lý do</TableHead>
                      <TableHead className="w-[200px] py-4">Trạng thái hoàn tiền</TableHead>
                      <TableHead className="w-[200px] py-4">Mã vận đơn | Trạng thái</TableHead>
                      <TableHead className="w-[200px] py-4">Thời gian</TableHead>
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
                              <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                  Xác nhận nhận hàng
                              </button>
                              
                          </TableCell>
                      </TableRow>
                  ))}
              </TableBody>
          </Table>
      </div>

    </TabsContent>
    <TabsContent value="CanPhanHoi">Loading......</TabsContent>
    <TabsContent value="DaPhanHoi">Loading.......</TabsContent>
    <TabsContent value="Success">Loading.......</TabsContent>
  </Tabs>
    </div>
  
  );
}
