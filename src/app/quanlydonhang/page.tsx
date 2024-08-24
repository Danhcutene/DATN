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
        ID: "q87491409",
        SP: "Hình ảnh",
        SoLuong: "5",
        TrangThai: "Chờ xác nhận",
        DonViVanChuyen: "GiaoHangTietKiem",      
    },
    {
        ID: "1870197409",
        SP: "Hình ảnh",
        SoLuong: "5",
        TrangThai: "Chờ xác nhận",
        DonViVanChuyen: "GiaoHangTietKiem",  
    },
  ];
  
  export default function TableDemo() {
    return (
      <div className="p-24">
        <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold ">Quản lý đơn hàng</span>
            </div>
        <Tabs defaultValue="account" className="w-[1350px]">
      <TabsList>
        <TabsTrigger value="All">Tất cả</TabsTrigger>
        <TabsTrigger value="CanPhanHoi">Chờ xác nhận</TabsTrigger>
        <TabsTrigger value="DaPhanHoi">Đóng gói</TabsTrigger>
        <TabsTrigger value="DangGiao">Đang giao</TabsTrigger>
        <TabsTrigger value="DaGiao">Đã giao</TabsTrigger>
        <TabsTrigger value="Huy">Đơn huỷ</TabsTrigger>
        <TabsTrigger value="TraHang">Trả hàng/Hoàn tiền</TabsTrigger>
        <TabsTrigger value="KhongThanhCong">Giao không thành công</TabsTrigger>      
      </TabsList>

      <TabsContent value="All">
      <div className="mt-3">
            <div className=" w-full max-w-sm items-center space-x-2">
          <span>Mã đơn hàng</span>
          <Input type="text"/>  
       <div className="flex mt-4">      
       </div>
      </div>
      
    
  
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID Đơn hàng</TableHead>
                        <TableHead className="w-[300px] py-4">Sản phẩm</TableHead>
                        <TableHead className="w-[200px] py-4">Tổng đơn hàng</TableHead>
                        <TableHead className="w-[200px] py-4">Trạng thái</TableHead>
                        <TableHead className="w-[200px] py-4">Đơn vị vận chuyển</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Xác nhận nhận hàng
                                </button>
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Huỷ
                                </button>
                                
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </TabsContent>

      <TabsContent value="CanPhanHoi">
      <div className="mt-3">
            <div className=" w-full max-w-sm items-center space-x-2">
          <span>Mã đơn hàng</span>
          <Input type="text"/>  
       <div className="flex mt-4">      
       </div>
      </div>
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID Đơn hàng</TableHead>
                        <TableHead className="w-[300px] py-4">Sản phẩm</TableHead>
                        <TableHead className="w-[200px] py-4">Tổng đơn hàng</TableHead>
                        <TableHead className="w-[200px] py-4">Trạng thái</TableHead>
                        <TableHead className="w-[200px] py-4">Đơn vị vận chuyển</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Xác nhận nhận hàng
                                </button>
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Huỷ
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </TabsContent>

      <TabsContent value="DaPhanHoi">
      <div className="mt-3">
            <div className=" w-full max-w-sm items-center space-x-2">
          <span>Mã đơn hàng</span>
          <Input type="text"/>  
       <div className="flex mt-4">      
       </div>
      </div>
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID Đơn hàng</TableHead>
                        <TableHead className="w-[300px] py-4">Sản phẩm</TableHead>
                        <TableHead className="w-[200px] py-4">Tổng đơn hàng</TableHead>
                        <TableHead className="w-[200px] py-4">Trạng thái</TableHead>
                        <TableHead className="w-[200px] py-4">Đơn vị vận chuyển</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    D
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </TabsContent>

      <TabsContent value="DangGiao">
      <div className="mt-3">
            <div className=" w-full max-w-sm items-center space-x-2">
          <span>Mã đơn hàng</span>
          <Input type="text"/>  
       <div className="flex mt-4">      
       </div>
      </div>
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID Đơn hàng</TableHead>
                        <TableHead className="w-[300px] py-4">Sản phẩm</TableHead>
                        <TableHead className="w-[200px] py-4">Tổng đơn hàng</TableHead>
                        <TableHead className="w-[200px] py-4">Trạng thái</TableHead>
                        <TableHead className="w-[200px] py-4">Đơn vị vận chuyển</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Xem thêm
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </TabsContent>
      <TabsContent value="DaGiao">       
      <div className="mt-3">
            <div className=" w-full max-w-sm items-center space-x-2">
          <span>Mã đơn hàng</span>
          <Input type="text"/>  
       <div className="flex mt-4">      
       </div>
      </div>
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID Đơn hàng</TableHead>
                        <TableHead className="w-[300px] py-4">Sản phẩm</TableHead>
                        <TableHead className="w-[200px] py-4">Tổng đơn hàng</TableHead>
                        <TableHead className="w-[200px] py-4">Trạng thái</TableHead>
                        <TableHead className="w-[200px] py-4">Đơn vị vận chuyển</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Xem thêm
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </TabsContent>
      <TabsContent value="Huy">
      <div className="mt-3">
            <div className=" w-full max-w-sm items-center space-x-2">
          <span>Mã đơn hàng</span>
          <Input type="text"/>  
       <div className="flex mt-4">      
       </div>
      </div>
            {/* Bảng quản lý người dùng */}
            <Table className="w-full border-collapse bg-white shadow-lg">
                <TableHeader className=" text-white">
                    <TableRow>
                        <TableHead className="w-[100px] py-4">ID Đơn hàng</TableHead>
                        <TableHead className="w-[300px] py-4">Sản phẩm</TableHead>
                        <TableHead className="w-[200px] py-4">Tổng đơn hàng</TableHead>
                        <TableHead className="w-[200px] py-4">Trạng thái</TableHead>
                        <TableHead className="w-[200px] py-4">Đơn vị vận chuyển</TableHead>
                        <TableHead className="w-[200px] py-4">Thao tác</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.ID} className="hover:bg-gray-100">
                            <TableCell className="border-t px-4 py-4 text-gray-800">{invoice.ID}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
                            <TableCell className="border-t px-4 py-4 flex space-x-2">
                                <button className=" text-black px-4 py-2 rounded-lg hover:bg-red-300">
                                    Xem thêm
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
      </TabsContent>
      <TabsContent value="TraHang">
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
                            <TableCell className="border-t px-4 py-4">{invoice.SP}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.SoLuong}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.TrangThai}</TableCell>
                            <TableCell className="border-t px-4 py-4">{invoice.DonViVanChuyen}</TableCell>
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
      <TabsContent value="KhongThanhCong">Loading.......</TabsContent>
    </Tabs>
      </div>
    
    );
  }
  