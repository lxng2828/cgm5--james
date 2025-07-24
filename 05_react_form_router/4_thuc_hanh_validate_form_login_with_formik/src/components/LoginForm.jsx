import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginForm.css';
function LoginForm() {
    const loginSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email là bắt buộc')
            .matches(
                /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,4})+$/,
                'Email không hợp lệ. Vui lòng kiểm tra định dạng.'
            ),
        password: Yup.string()
            .required('Mật khẩu là bắt buộc')
            .min(6, 'Mật khẩu phải có ít nhất 6 ký tự.')
            .matches(
                /^[a-zA-Z0-9!@#$%^&()+=._-]+$/,
                'Mật khẩu chỉ chấp nhận a-z, A-Z, 0-9 và !@#$%^&()+=._-'
            ),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            console.log('Login successful!', values);
            alert(`Đăng nhập thành công!\nEmail: ${values.email}\nPassword: ${values.password}`);
        },
    });
    return (
        <div className="login-container">
            <h2 className="login-title">Đăng nhập</h2>
            <form onSubmit={formik.handleSubmit}>
                { }
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        className={formik.errors.email && formik.touched.email ? 'input-error' : ''}
                        placeholder="Nhập email của bạn"
                    />
                    { }
                    {formik.errors.email && formik.touched.email && (
                        <p className="error-message">{formik.errors.email}</p>
                    )}
                </div>
                { }
                <div className="form-group">
                    <label htmlFor="password">Mật khẩu:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        className={formik.errors.password && formik.touched.password ? 'input-error' : ''}
                        placeholder="Nhập mật khẩu của bạn"
                    />
                    {formik.errors.password && formik.touched.password && (
                        <p className="error-message">{formik.errors.password}</p>
                    )}
                </div>
                <button type="submit" className="submit-button">
                    Đăng nhập
                </button>
            </form>
        </div>
    );
}
export default LoginForm;