
import java.util.*;

class MinHeap {
    private int size;
    private int capacity;
    private int[] heap;

    public MinHeap(int capacity){
        this.size = -1;
        this.capacity=capacity;
        this.heap = new int[capacity];
    }
    
    private int parent(int pos) {
        if(pos%2==0)
            return ((pos/2)-1);
        return (pos / 2);
    }
    private int left(int pos){
        return (pos*2+1);
    }
    private int right(int pos){
        return (pos*2+2);
    }
    private boolean isLeaf(int pos){
        if(pos>size/2 && pos<=size){
            return true;
        }
        return false;
    }
    private void swap(int currentPos, int parentPos) {
        int temp = heap[currentPos];
        heap[currentPos]=heap[parentPos];
        heap[parentPos]=temp;
    }
    
    public void insert(int element){
        if(size>=capacity)
            return;
        
        if(size==-1){
            heap[++size]=element;
            return;
        }

        heap[++size] = element;
        int current = size;
        while(current > 0 && heap[current]<heap[parent(current)]){
            swap(current,parent(current));
            current=parent(current);
        }
    }

    public int remove(){
        int removedElement = heap[0];
        heap[0]=heap[size--];
        minHeapify();
        return removedElement;
    }

    public void minHeapify(){
        for(int i=(size/2-1);i>=0;i--){
            System.out.println(heap[i]);
            heapify(i);
        }
    }

    public void heapify(int pos){
        if(!isLeaf(pos)){
            if(( left(pos)<size && heap[pos] > heap[left(pos)]) || ( right(pos)<size && heap[pos] > heap[right(pos)])){
                if(heap[left(pos)] < heap[right(pos)]){
                    swap(pos,left(pos));
                    heapify(left(pos));
                }
                else{
                    swap(pos,right(pos));
                    heapify(right(pos));
                }
            }
        }
    }

    public static MinHeap arrayToHeap(int[] arr, int n){
        MinHeap Heap = new MinHeap(n);
        Heap.heap=arr;
        Heap.size = n;
        Heap.minHeapify();
        Heap.print();
        return Heap;
    }

    public void print(){
        for(int i=0;i<size/2;i++){
            System.out.print(" PARENT : " + heap[i] 
                                + " LEFT CHILD [" + ((2 * i) + 1) + "] : " + heap[(2 * i) + 1] 
                                + " RIGHT CHILD :" + heap[(2 * i) + 2]); 
            System.out.println(); 
        }

        for(int i=0;i<size;i++){
            System.out.print(heap[i] + " ");
        }
        System.out.println(); 

    }

    public void insertMaxHeap(int element){
        insert(-element);
    }

    public void printMaxHeap(){
        for(int i=0;i<size;i++){
            System.out.print((-heap[i]) + " ");
        }
        System.out.println(); 
    }

    public static void main(String[] args) {
        MinHeap minHeap = new MinHeap(10);
        minHeap.insert(5); 
        minHeap.insert(3); 
        minHeap.insert(17); 
        minHeap.insert(10); 
        minHeap.insert(84); 
        minHeap.insert(19); 
        minHeap.insert(6); 
        minHeap.insert(22); 
        minHeap.insert(9);
        minHeap.print();
        minHeap.minHeapify();
        minHeap.print();

        minHeap.remove();
        minHeap.print();

        int[] arr = new int[]{6,1,2,9,10,5,1};
        MinHeap.arrayToHeap(arr, 7);

        System.out.println("max heap -----");
        MinHeap maxHeap = new MinHeap(10);
        maxHeap.insertMaxHeap(5); 
        maxHeap.insertMaxHeap(3); 
        maxHeap.insertMaxHeap(17); 
        maxHeap.insertMaxHeap(10); 
        maxHeap.insertMaxHeap(84); 
        maxHeap.insertMaxHeap(19); 
        maxHeap.insertMaxHeap(6); 
        maxHeap.insertMaxHeap(22);

        maxHeap.printMaxHeap();
    }

}