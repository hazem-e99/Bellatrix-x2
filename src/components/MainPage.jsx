import React from 'react';
import { useParams } from 'react-router-dom'; // لقراءة الراوت
import HRPage from './HR'; // استيراد صفحة HR
import PayrollPage from './PayrollParent'; // استيراد صفحة Payroll
import hrData from './hrData.json'; // بيانات HR
import payrollData from './payrollData.json'; // بيانات Payroll

const MainComponent = () => {
  const { pageType } = useParams(); // الحصول على نوع الصفحة (hr أو payroll)

  // تحديد البيانات بناءً على الصفحة
  const pageData = pageType === 'hr' ? hrData : payrollData;

  return (
    <div className="app-container">
      {/* هنا يمكنك وضع مكونات مشتركة مثل Header أو Footer */}

      {/* عرض الصفحة المناسبة بناءً على الرابط */}
      {pageType === 'hr' ? (
        <HRPage data={pageData} />
      ) : (
        <PayrollPage data={pageData} />
      )}
    </div>
  );
};

export default MainComponent;