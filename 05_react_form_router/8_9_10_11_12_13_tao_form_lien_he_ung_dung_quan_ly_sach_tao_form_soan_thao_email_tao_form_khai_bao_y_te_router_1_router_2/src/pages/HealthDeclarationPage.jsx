import React from 'react';
import { Form, Input, Radio, Checkbox, Button, message, Divider } from 'antd';
const { TextArea } = Input;
const HealthDeclarationPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form:', values);
        message.success('Tờ khai y tế đã được gửi thành công!');
        form.resetFields();
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Vui lòng kiểm tra lại các trường đã nhập!');
    };
    return (
        <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto', border: '1px solid #eee', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '24px', fontWeight: 'bold' }}>TỜ KHAI Y TẾ</h2>
            <Form
                form={form}
                name="health_declaration_form"
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{
                    gender: 'male',
                    hasHealthInsurance: false,
                    symptoms: [],
                    contactHistory: []
                }}
            >
                <Divider orientation="left">Thông tin cá nhân</Divider>

                <Form.Item
                    label="Họ tên"
                    name="fullName"
                    rules={[{ required: true, message: 'Vui lòng nhập Họ tên!' }]}
                >
                    <Input placeholder="Nhập họ tên đầy đủ" />
                </Form.Item>

                <Form.Item
                    label="Số hộ chiếu / CMND"
                    name="passportId"
                    rules={[{ required: true, message: 'Vui lòng nhập Số hộ chiếu / CMND!' }]}
                >
                    <Input placeholder="Nhập số hộ chiếu hoặc CMND" />
                </Form.Item>

                <Form.Item
                    label="Năm sinh"
                    name="birthYear"
                    rules={[
                        { required: true, message: 'Vui lòng nhập Năm sinh!' },
                        { type: 'number', message: 'Năm sinh phải là số!', transform: (value) => Number(value) },
                        { min: 1900, max: new Date().getFullYear(), type: 'number', message: 'Năm sinh không hợp lệ!' }
                    ]}
                >
                    <Input type="number" placeholder="VD: 1990" />
                </Form.Item>

                <Form.Item
                    label="Giới tính"
                    name="gender"
                    rules={[{ required: true, message: 'Vui lòng chọn Giới tính!' }]}
                >
                    <Radio.Group>
                        <Radio value="male">Nam</Radio>
                        <Radio value="female">Nữ</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    label="Quốc tịch"
                    name="nationality"
                    rules={[{ required: true, message: 'Vui lòng nhập Quốc tịch!' }]}
                >
                    <Input placeholder="Nhập quốc tịch" />
                </Form.Item>

                <Form.Item
                    label="Công ty làm việc"
                    name="company"
                >
                    <Input placeholder="Nhập tên công ty (nếu có)" />
                </Form.Item>

                <Form.Item
                    label="Bộ phận làm việc"
                    name="department"
                >
                    <Input placeholder="Nhập bộ phận làm việc (nếu có)" />
                </Form.Item>

                <Form.Item
                    name="hasHealthInsurance"
                    valuePropName="checked"
                >
                    <Checkbox>Có thẻ bảo hiểm y tế</Checkbox>
                </Form.Item>
                <Divider orientation="left">Địa chỉ liên lạc tại Việt Nam</Divider>

                <Form.Item
                    label="Tỉnh thành"
                    name="province"
                    rules={[{ required: true, message: 'Vui lòng nhập Tỉnh thành!' }]}
                >
                    <Input placeholder="Nhập tỉnh/thành phố" />
                </Form.Item>

                <Form.Item
                    label="Quận / Huyện"
                    name="district"
                    rules={[{ required: true, message: 'Vui lòng nhập Quận / Huyện!' }]}
                >
                    <Input placeholder="Nhập quận/huyện" />
                </Form.Item>

                <Form.Item
                    label="Phường / Xã"
                    name="ward"
                    rules={[{ required: true, message: 'Vui lòng nhập Phường / Xã!' }]}
                >
                    <Input placeholder="Nhập phường/xã" />
                </Form.Item>

                <Form.Item
                    label="Số nhà, phố, tổ dân phố / thôn / đội"
                    name="streetAddress"
                    rules={[{ required: true, message: 'Vui lòng nhập Số nhà, phố, tổ dân phố / thôn / đội!' }]}
                >
                    <Input placeholder="Nhập số nhà, tên đường/phố..." />
                </Form.Item>

                <Form.Item
                    label="Điện thoại"
                    name="phone"
                    rules={[
                        { required: true, message: 'Vui lòng nhập Số điện thoại!' },
                        { pattern: /^[0-9]{10,11}$/, message: 'Số điện thoại không hợp lệ!' }
                    ]}
                >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        { type: 'email', message: 'Email không hợp lệ!' },
                        { required: true, message: 'Vui lòng nhập Email!' }
                    ]}
                >
                    <Input placeholder="Nhập địa chỉ email" />
                </Form.Item>
                <Divider orientation="left">Thông tin sức khỏe và lịch sử di chuyển</Divider>

                <Form.Item
                    label="Trong vòng 14 ngày qua, Anh/Chị có đến quốc gia / vùng lãnh thổ nào? (Có thể đi qua nhiều quốc gia)"
                    name="recentTravelHistory"
                >
                    <TextArea rows={4} placeholder="Liệt kê tên quốc gia/vùng lãnh thổ đã đến" />
                </Form.Item>

                <Form.Item
                    label="Trong vòng 14 ngày qua, Anh/Chị có thấy xuất hiện dấu hiệu nào sau đây không?"
                    name="symptoms"
                    valuePropName="value"
                >
                    <Checkbox.Group>
                        <Checkbox value="fever">Sốt</Checkbox>
                        <Checkbox value="cough">Ho</Checkbox>
                        <Checkbox value="shortnessOfBreath">Khó thở</Checkbox>
                        <Checkbox value="pneumonia">Viêm phổi</Checkbox>
                        <Checkbox value="soreThroat">Đau họng</Checkbox>
                        <Checkbox value="fatigue">Mệt mỏi</Checkbox>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item
                    label="Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?"
                    name="contactHistory"
                    valuePropName="value"
                >
                    <Checkbox.Group>
                        <Checkbox value="covidPatient">Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</Checkbox>
                        <Checkbox value="foreignCovidPatient">Người từ nước có bệnh COVID-19</Checkbox>
                        <Checkbox value="symptomaticPerson">Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</Checkbox>
                    </Checkbox.Group>
                </Form.Item>

                <Form.Item style={{ marginTop: '30px', textAlign: 'center' }}>
                    <Button type="primary" htmlType="submit" size="large" style={{ width: '100%' }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default HealthDeclarationPage;
