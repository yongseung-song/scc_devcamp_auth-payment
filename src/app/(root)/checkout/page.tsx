import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 gap-12">
      <header>결제하기</header>
      <section className="flex w-full gap-4  flex-row">
        <div className="flex flex-col gap-4 w-3/5 ">
          <div id="OrderInfo" className="p-6 bg-slate-800">
            <h3 className="mb-4">주문 상품 정보</h3>
            <div className="flex flex-row gap-4">
              <img src="" alt="product name" className="w-20 h-20" />
              <div>
                <p>Daily Facial Soap</p>
                <span>용량 30ml</span>
                <p>10000</p>
              </div>
            </div>
          </div>
          <div id="OrdererInfo" className=" p-6 bg-slate-800">
            <h3>주문자 정보</h3>
            <div>
              <p>홍길동</p>
              <p>010-1234-5678</p>
              <p>user@gmail.com</p>
            </div>
          </div>
          <div id="DeliveryInfo" className="p-6 bg-slate-800">
            <h3>배송 정보</h3>
            <div>
              <p>홍길동</p>
              <p>01234567890</p>
              <p>서울특별시 서대문구 성산로7길 89-8</p>
              <p>주식회사 아임웹</p>
              <p>(03706)</p>
            </div>
          </div>
          <div id="DiscountInfo" className="p-6 bg-slate-800">
            <h3>쿠폰/포인트</h3>
            <form action="">
              <label htmlFor=""></label>
              <input type="text" name="" id="" />
              <button>쿠폰적용</button>
            </form>
            <form action="">
              <label htmlFor=""></label>
              <input type="text" name="" id="" />
              <button>번호확인</button>
            </form>
            <form action="">
              <label htmlFor=""></label>
              <input type="text" name="" id="" />
              <button>전액사용</button>
            </form>
            <p>보유 포인트 1,0000</p>
            <span>어쩌구저쩌구 사용가능</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-2/5">
          <div id="PaymentInfo" className="p-6 bg-slate-800">
            <h3>최종 결제금액</h3>
            <dl>
              <div className="flex flex-row justify-between">
                <dt>상품 가격</dt>
                <dd>10,000</dd>
              </div>
              <div className="flex flex-row justify-between">
                <dt>쿠폰 할인</dt>
                <dd>-1,000</dd>
              </div>
              <div className="flex flex-row justify-between">
                <dt>포인트 사용</dt>
                <dd>-0</dd>
              </div>
              <div className="flex flex-row justify-between">
                <dt>배송비</dt>
                <dd>3,000</dd>
              </div>
              <hr className="w-full h-[2px] bg-slate-500" />
              <div className="flex flex-row justify-between">
                <dt>총 결제금액</dt>
                <dd>10,000</dd>
              </div>
            </dl>
            <span>100 포인트 적립예정</span>
          </div>
          <div id="PaymentMethod" className="p-6 bg-slate-800">
            <h3>결제 방법</h3>
            <form action="">
              <div>
                <input type="radio" name="credit-card" id="credit-card" />
                <label htmlFor="credit-card">신용카드</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="virtual-account"
                  id="virtual-account"
                />
                <label htmlFor="virtual-account">가상계좌</label>
              </div>
              <div>
                <input type="radio" name="bank-transfer" id="bank-transfer" />
                <label htmlFor="bank-transfer">무통장 입금</label>
              </div>
              <div>
                <input type="radio" name="phone-payment" id="phone-payment" />
                <label htmlFor="phone-payment">핸드폰 결제</label>
              </div>
              <div>
                <input type="radio" name="kakao-pay" id="kakao-pay" />
                <label htmlFor="kakao-pay">카카오페이</label>
              </div>
            </form>
          </div>
          <div id="PaymentProceed" className="p-6 bg-slate-800">
            <Button className="w-full">결제하기</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
