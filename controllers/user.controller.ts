import userModel from "../models/user.model";
import bcrypt from "bcrypt";
const jwt = require("jsonwebtoken");
import moment from "moment-timezone";


function userRegister(body: any, headers: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const { timezone, language } = headers;
            var timezones = timezone ? timezone : "asia/kolkata";
            const { phone, email, password, name } = body;
            if (!phone || !email || !password || !name) {
                reject({ code: "401", message: " BadRequest" });
            }
            var userVal = await userModel.findOne({ email: email });
            if (userVal) {
                reject({ code: "302", message: "AlreadyExists" });
            } else {
                var req_data: any = {
                    phone: phone,
                    name: name,
                    email: email,
                    password: password,
                    createdAt: moment(new Date()).tz(timezones).format(),
                };
                const pass = bcrypt.hashSync(req_data.password, 10);
                req_data.password = pass;
                var user: any = await new userModel(req_data).save();
                resolve({ code: "201", message: "signUp", result: user });
            }
        } catch (error) {
            console.log(error);
            reject({ code: "501", message: "internal error" });
        }
    });
}

// user Login

function userLogin(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {

            const { email, password } = body;
            if (!email || !password) {
                reject({ code: "402", message: "BadRequest" });
            }
            var user = await userModel.findOne({ email: email });
            if (user) {
                if (user.isActive === false) {
                    reject({
                        code: "402",
                        message: "Your account has been deactvated by Admin",
                    });
                }
                var password_status = bcrypt.compareSync(password, user.password);
                if (password_status == false) {
                    reject({ code: "402", message: "invalidPass" });
                } else {
                    resolve({ code: "200", message: "success" });
                }
            } else {
                reject({ code: "402", message: "notFound" });
            }
        } catch (error) {
            console.log(error);
            reject({ code: "501", message: "internal error" });
        }
    });
}




//*********User List********* */
function userList(body: any): Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const chck = await userModel.findOne({});
            if (chck) {
                resolve({ code: "200", message: "success", result: chck });
            } else {
                reject({ code: "402", message: "notFound" });
            }
        } catch (error) {
            console.log(error);
            reject({ code: "501", message: "internal error" });
        }
    });
}
// Export default
export default {
    userRegister,
    userLogin,
    userList,
} as const;
