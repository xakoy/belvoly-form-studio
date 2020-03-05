/**
 * 获取唯一ID
 * @param length 随机数长度
 */
export function getUnniID(length = 10) {
    return (
        Math.random()
            .toString()
            .substr(3, length) + Date.now().toString(36)
    )
}
