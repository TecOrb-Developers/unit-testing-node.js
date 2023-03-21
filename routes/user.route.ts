
import { Request, Response, Router } from "express";
import userController from "../controllers/user.controller";



// Constants
const router = Router();


// Paths
export const p = {
    add: "/add",
    login: "/login",
    list: "/list",

} as const;

//***********Add User******** */
router.post(p.add, async (req: Request, res: Response) => {
    const data = await userController.userRegister(req.body, req.headers);
    return res.send(data);
});
//**********Login User *********** */
router.post(p.login, async (req: any, res: Response) => {
    const data = await userController.userLogin(req.body);
    return res.send(data);
});

//***********User Details******** */
router.get(p.list, async (req: any, res: Response) => {
    const data = await userController.userList(req.body);
    return res.send(data);
});
// Export default
export default router;
