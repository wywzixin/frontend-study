function arrToTree(arr) {
    const idTreeNode = new Map();
    let root = null;
    arr.forEach(item => {
        const { id, name, parentId } = item;
        const treeNode = { id, name };
        idTreeNode.set(id, treeNode); // id存起来，对应自身，下一个通过parentId找到这个id, 追加到他上边
        const parentNode = idTreeNode.get(parentId);
        if (parentNode) {
            if (!parentNode.children) parentNode.children = [];
            parentNode.children.push(treeNode);
        }
        if (parentId === 0) root = treeNode;
    });
    return root;
}

function treeToArray(root) {
    const nodeToParent = new Map();
    const arr = [];
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const curNode = queue.shift();
        if (curNode === null) break;
        const { id, name, children = [] } = curNode;
        const parentNode = nodeToParent.get(curNode); // 从关联中寻找parentId
        const parentId = parentNode?.id || 0;
        const item = { id, name, parentId };
        arr.push(item);
        children.forEach(child => {
            nodeToParent.set(child, curNode); // 建立子元素和父元素之间的关联
            queue.push(child);
        });
    }
    return arr;
}
