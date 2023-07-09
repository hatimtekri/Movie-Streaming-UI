"use client";
import { ConfigProvider } from "antd";

export function Providers({ children }) {
  return (
    <ConfigProvider
      theme={{
        "token": {
        
        },
        "components": {
          "Button": {
           
          },
          "Menu": {
          
          },
          "Pagination": {
         
          },
          "Rate": {
          
          },
          "Slider": {
        
          },
          "Badge": {
         
          },
          "Collapse": {
        
          },
          "Segmented": {
       
          },
          "Popconfirm": {
          
          },
          "Spin": {
         
          },
          "Table": {
          
          }
        }
      }}
      
    >
      {children}
    </ConfigProvider>
  );
}
