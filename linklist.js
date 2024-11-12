import Node from './node';

class LinkedList {
    constructor() {
        this.headNode = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.headNode) {
            this.headNode = newNode;
        } else {
            let current = this.headNode;
            while (current.nextNode) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode;
    }

    tail() {
        let current = this.headNode;
        if (!current) return null;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index < 0 || index >= this.length) return null;
        let current = this.headNode;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (!this.headNode) return null;
        if (this.length === 1) {
            const temp = this.headNode;
            this.headNode = null;
            this.length--;
            return temp;
        }
        let current = this.headNode;
        let prev = null;
        while (current.nextNode) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = null;
        this.length--;
        return current;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = "";
        let current = this.headNode;
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) return;
        const newNode = new Node(value);
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let current = this.headNode;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = newNode;
        newNode.nextNode = current;
        this.length++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) {
            const temp = this.headNode;
            this.headNode = this.headNode.nextNode;
            this.length--;
            return temp;
        }
        let current = this.headNode;
        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.nextNode;
        }
        prev.nextNode = current.nextNode;
        this.length--;
        return current;
    }
}

export default LinkedList;
